using TextParser.Models;

namespace TextParser.DAL
{
    public interface IDb
    {
        public void AddFile(FileModel file);
        public void AddFile(DbFileModel file);
        public string[] GetFileNames();
        public string GetFileContent(string fileName);
        public void DeleteFile(string filename);
    }
}
