using TextParser.Models;

namespace TextParser.Helpers
{
    public interface IDbFileFactory
    {
        public DbFileModel Create(FileModel file);
    }
}
