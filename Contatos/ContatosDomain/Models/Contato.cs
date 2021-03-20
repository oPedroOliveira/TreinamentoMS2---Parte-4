using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContatosDomain.Models
{
    public class Contato
    {
        public string ContatoId { get; set; }
        public string Nome { get; set; }
        public IList<ContatoNumero> Numeros { get; set; } = new List<ContatoNumero>();
    }
}
