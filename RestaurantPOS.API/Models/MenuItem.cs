using System;

namespace RestaurantPOS.API.Models
{
    public class MenuItem : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsAvailable { get; set; } = true;
        
        public Guid CategoryId { get; set; }
        public virtual Category? Category { get; set; }

        // Ingredients reference, taxation logic etc. omitted for brief first build
        public decimal TaxPercentage { get; set; } = 0;
        public string? SKUToken { get; set; }
    }
}
