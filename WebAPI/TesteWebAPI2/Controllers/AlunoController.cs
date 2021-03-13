using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteWebAPI2.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TesteWebAPI2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : ControllerBase
    {
        // GET: api/<AlunoController>
        [HttpGet]
        public ActionResult<IEnumerable<Aluno>> Get()
        {
            return alunos.ToList();

        }

        // GET api/<AlunoController>/5
        [HttpGet("{id}")]
        public ActionResult<Aluno> GetById(string alunoId)
        {
            var obj = alunos.Where(a => a.AlunoId == alunoId).FirstOrDefault();

            if(obj == null)
            {
                return NotFound();
            }

            return obj;
        }

        // POST api/<AlunoController>
        [HttpPost]
        public ActionResult<Aluno> Post([FromBody] Aluno objNovo)
        {
            objNovo.AlunoId = Guid.NewGuid().ToString();

            alunos.Add(objNovo);

            return CreatedAtAction(nameof(GetById), new { id = objNovo.AlunoId }, objNovo);
        }

        // PUT api/<AlunoController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Aluno objNovo)
        {
            if (id != objNovo.AlunoId)
                return BadRequest();

            var obj = alunos.Where(a => a.AlunoId == id).FirstOrDefault();

            if (obj == null)
            {
                return NotFound();
            }

            obj.Nome = objNovo.Nome;
            obj.Matricula = objNovo.Matricula;

            return NoContent();
        }

        // DELETE api/<AlunoController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var obj = alunos.Where(a => a.AlunoId == id).FirstOrDefault();

            if (obj == null)
                return NotFound();

            alunos.Remove(obj);

            return NoContent();
        }

        public static IList<Aluno> alunos = new List<Aluno>
        {
            new Aluno { AlunoId = "a1", Matricula = 123, Nome = "aaa"},
            new Aluno { AlunoId = "a2", Matricula = 124, Nome = "bbb"},
            new Aluno { AlunoId = "a3", Matricula = 125, Nome = "ccc"},
            new Aluno { AlunoId = "a4", Matricula = 126, Nome = "ddd"}
        };
    }
}
