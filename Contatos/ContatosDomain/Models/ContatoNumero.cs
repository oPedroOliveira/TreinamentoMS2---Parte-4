using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContatosDomain.Models
{
    public class ContatoNumero
    {
        public string ContatoNumeroId { get; set; }
        public string ContatoId { get; set; }
        public ETipoNumero Tipo { get; set; }
        public string Numero { get; set; }
    }
}
