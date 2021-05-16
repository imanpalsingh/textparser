using Microsoft.AspNetCore.Http;
using System.Text;
using System.IO;

namespace TextParser.Helpers
{
    public class FileContent : IFileContent
    {
        public string ReadToString(IFormFile file)
        {
            StringBuilder fileContents = new();

            using (StreamReader reader = new(file.OpenReadStream()))
            {
                while (reader.Peek() >= 0)
                {
                    fileContents.AppendLine(reader.ReadLine());
                }
            }

            return fileContents.ToString();
        }
    }
}
