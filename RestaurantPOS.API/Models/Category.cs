using System.Collections.Generic;

namespace RestaurantPOS.API.Models
{
    public class Category : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public int DisplayOrder { get; set; }
        public bool IsActive { get; set; } = true;

        public virtual ICollection<MenuItem> MenuItems { get; set; } = new List<MenuItem>();
    }
}
