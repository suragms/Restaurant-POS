using System;
using System.Collections.Generic;

namespace RestaurantPOS.API.Models
{
    public class Restaurant : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string? GSTNumber { get; set; }
        public string? LogoUrl { get; set; }
        public bool IsActive { get; set; } = true;

        public virtual ICollection<ApplicationUser> Staff { get; set; } = new List<ApplicationUser>();
        public virtual ICollection<RestaurantTable> Tables { get; set; } = new List<RestaurantTable>();
        public virtual ICollection<Category> MenuCategories { get; set; } = new List<Category>();
    }
}
