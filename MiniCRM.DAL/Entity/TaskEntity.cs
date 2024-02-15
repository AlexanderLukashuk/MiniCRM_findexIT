using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MiniCRM.DAL.Entity
{
    public class TaskEntity : BaseEntity
    {
        [Required]
        [ForeignKey("EmployeeId")]
        public int EmployeeId { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Title { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime Deadline { get; set; }

        [Required]
        [Range(0, 100)]
        public int CompletionPercentage { get; set; }

        public EmployeeEntity? Employee { get; set; }
    }
}