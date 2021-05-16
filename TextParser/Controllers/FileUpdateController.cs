using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TextParser.Models;
using TextParser.DAL;
using System;

namespace TextParser.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileUpdateController : ControllerBase
    {
        private readonly IDb database;

        public FileUpdateController(IDb db)
        {
            database = db;
        }

        [HttpPut]
        public IActionResult UpdateFileContent([FromForm] DbFileModel file)
        {
            try
            {
                database.AddFile(file);
                return Ok($"{file.FileName} was added");
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
        }
    }
}
