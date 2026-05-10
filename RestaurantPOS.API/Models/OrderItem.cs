using System;

namespace RestaurantPOS.API.Models
{
    public class OrderItem : BaseEntity
    {
        public Guid OrderId { get; set; }
        public virtual Order? Order { get; set; }

        public Guid MenuItemId { get; set; }
        public virtual MenuItem? MenuItem { get; set; }

        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }

        public string? CustomizationNotes { get; set; }
        public bool IsKitchenFired { get; set; } = false;
        public DateTime? KitchenFiredAt { get; set; }
    }
}
