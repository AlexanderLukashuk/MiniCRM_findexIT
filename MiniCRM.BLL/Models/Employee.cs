using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniCRM.BLL.Models
{
    public class Employee : BaseEntity
    {
        public string? FullName { get; set; }

        public string? Position { get; set; }
    }
}