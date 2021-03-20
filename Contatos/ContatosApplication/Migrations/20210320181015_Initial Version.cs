using Microsoft.EntityFrameworkCore.Migrations;

namespace ContatosApplication.Migrations
{
    public partial class InitialVersion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contato",
                columns: table => new
                {
                    ContatoId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contato", x => x.ContatoId);
                });

            migrationBuilder.CreateTable(
                name: "ContatoNumero",
                columns: table => new
                {
                    ContatoNumeroId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ContatoId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Tipo = table.Column<int>(type: "int", nullable: false),
                    Numero = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContatoNumero", x => x.ContatoNumeroId);
                    table.ForeignKey(
                        name: "FK_ContatoNumero_Contato_ContatoId",
                        column: x => x.ContatoId,
                        principalTable: "Contato",
                        principalColumn: "ContatoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContatoNumero_ContatoId",
                table: "ContatoNumero",
                column: "ContatoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContatoNumero");

            migrationBuilder.DropTable(
                name: "Contato");
        }
    }
}
