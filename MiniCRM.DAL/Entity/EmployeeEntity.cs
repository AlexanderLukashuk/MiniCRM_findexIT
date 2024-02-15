using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MiniCRM.DAL.Entity
{
    public class EmployeeEntity : BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string? FullName { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Position { get; set;}

        [MaxLength(100)]
        public string? Passowrd { get; set; }

        public ICollection<TaskEntity> Tasks { get; set; } = new List<TaskEntity>();
    }
}