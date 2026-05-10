using Microsoft.AspNetCore.Identity;
using System;

namespace RestaurantPOS.API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Reference to the Restaurant this user belongs to (nullable for Super Admins)
        public Guid? RestaurantId { get; set; }
        public virtual Restaurant? Restaurant { get; set; }
    }
}
