using TextParser.Models;
using TextParser.Helpers;
using System.Linq;

namespace TextParser.DAL
{
    public class Db : IDb
    {
        private readonly FileContext _context;
        private readonly IDbFileFactory _filecontext;

        public Db(FileContext context, IDbFileFactory filecontext)
        {
            _context = context;
            _filecontext = filecontext;

        }

        public void AddFile(DbFileModel file)
        {
            // If already exists , just update the contents
            var _file = _context
                .Files
                .Where(e => e.FileName == file.FileName)
                .FirstOrDefault();

            if (_file != null)
            {
                _file.FileContent = file.FileContent;
            }
            else
            {
                _context.Files.Add(file);
            }
            _context.SaveChanges();
        }

        public void AddFile(FileModel file)
        {
            var filecontext = _filecontext.Create(file);
            AddFile(filecontext);
        }

        public string[] GetFileNames()
        {
            string[] fileNames = _context
                                .Files
                                .Select(e => e.FileName)
                                .ToArray();
            return fileNames;
        }

        public string GetFileContent(string fileName)
        {
            string fileContent = _context
                .Files
                .Where(e => e.FileName == fileName)
                .Select(e => e.FileContent)
                .FirstOrDefault();

            return fileContent;
        }

        public void DeleteFile(string filename)
        {
            var file = _context
                .Files
                .Where(e => e.FileName == filename)
                .FirstOrDefault();

            if(file != null)
            {
                _context.Files.Remove(file);
                _context.SaveChanges();
            }
        }
    }
}
