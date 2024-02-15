using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MiniCRM.DAL.Migrations
{
    /// <inheritdoc />
    public partial class AddRoleProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Tasks",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Employees");
        }
    }
}
