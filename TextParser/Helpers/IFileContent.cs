using Microsoft.AspNetCore.Http;

namespace TextParser.Helpers
{
    public interface IFileContent
    {
        public string ReadToString(IFormFile file);
    }
}
