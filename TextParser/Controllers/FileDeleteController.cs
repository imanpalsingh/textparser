using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TextParser.Models;
using TextParser.DAL;
using System;

namespace TextParser.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileDeleteController : ControllerBase
    {
        private readonly IDb database;

        public FileDeleteController(IDb db)
        {
            database = db;
        }

        [HttpDelete]
        public IActionResult DeleteFile([FromHeader] string filename)
        {
            database.DeleteFile(filename);
            return Ok($"Deleted {filename} if it existed, else ignored.");
        }
    }
}
