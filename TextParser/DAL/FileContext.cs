using TextParser.Models;
using Microsoft.EntityFrameworkCore;

namespace TextParser.DAL
{
    public class FileContext : DbContext
    {
        public FileContext(DbContextOptions<FileContext> options) : base(options)
        {

        }

        public DbSet<DbFileModel> Files { get; set; }
    }
}
