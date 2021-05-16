using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TextParser.Models;
using TextParser.DAL;
using System;


namespace TextParser.Controllers
{
    [ApiController]
    [Route("api/file")]
    public class FilePostController : ControllerBase
    {

        private readonly IDb database;
       
       public FilePostController(IDb db)
       {
            database = db;
       }

       [HttpPost]
       public IActionResult Upload([FromForm] FileModel file)
       {
            try
            {
                database.AddFile(file);
                return Ok($"{file.FileName} adding Successfull");
            }

            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
       }
    }
}
