using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteWebAPI2.Models;

namespace TesteWebAPI2.DTOs
{
    public class AlunoDTO
    {
        public AlunoDTO()
        {

        }

        public AlunoDTO(Aluno obj)
        {
            AlunoId = obj.AlunoId;
            Nome = obj.Nome;
        }

        public string AlunoId { get; set; }
        public string Nome { get; set; }
    }
}
