using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TextParser.Models;
using TextParser.DAL;
using System;
using System.Text;

namespace TextParser.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileGetController : ControllerBase
    {
        private readonly IDb database;

        public FileGetController(IDb db)
        {
            database = db;
        }

        [HttpGet("names")]
        public IActionResult FileNames()
        {
            try
            {
                string[] response = database.GetFileNames();
                return Ok(response);
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
            
        }

        [HttpGet("content/{filename}")]
        public IActionResult FileContent([FromRoute] string filename)
        {
            try
            {
                string response = database.GetFileContent(filename);
                if(response == null)
                {
                    return StatusCode(404, $"File {filename} doesn't exist");
                }
                return Ok(response);
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpGet("download/{filename}")]
        public IActionResult FileDownload([FromRoute] string filename)
        {
            try
            {
                string response = database.GetFileContent(filename);
                if (response == null)
                {
                    return StatusCode(404, $"File {filename} doesn't exist");
                }

                return File(Encoding.UTF8.GetBytes(response), "text/plain", filename);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }
    }
}
