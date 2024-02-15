using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniCRM.BLL.Models
{
    public class EmployeeWithTaskInfo
    {
        public Employee? Employee { get; set; }

        public int TaskCount { get; set; }

        public int CompletionPercentage { get; set; }
    }
}