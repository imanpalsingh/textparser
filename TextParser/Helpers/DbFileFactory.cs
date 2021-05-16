using TextParser.Models;


namespace TextParser.Helpers
{
    public class DbFileFactory : IDbFileFactory
    {
        private readonly IFileContent _fileContentContext;

        public DbFileFactory(IFileContent fileContentContext)
        {
            _fileContentContext = fileContentContext;
        }

        public  DbFileModel Create(FileModel file)
        {
            string fileContent = _fileContentContext.ReadToString(file.FormFile);
            return new DbFileModel()
            {
                FileName = file.FileName,
                FileContent = fileContent
            };
        }
    }
}
