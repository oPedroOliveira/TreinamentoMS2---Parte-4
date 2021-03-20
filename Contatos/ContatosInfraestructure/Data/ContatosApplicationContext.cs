using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ContatosDomain.Models;

namespace ContatosInfraestructure.Data
{
    public class ContatosApplicationContext : DbContext
    {
        public ContatosApplicationContext (DbContextOptions<ContatosApplicationContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contato>()
                        .HasMany(n => n.Numeros)
                        .WithOne()
                        .HasForeignKey(p => p.ContatoId)
                        .OnDelete(DeleteBehavior.Cascade);
        }

        public DbSet<ContatosDomain.Models.Contato> Contato { get; set; }
    }
}
