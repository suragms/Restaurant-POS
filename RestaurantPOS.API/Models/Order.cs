using System;
using System.Collections.Generic;

namespace RestaurantPOS.API.Models
{
    public enum OrderStatus
    {
        Pending,
        Preparing,
        Ready,
        Served,
        Completed,
        Cancelled
    }

    public enum OrderType
    {
        DineIn,
        Takeaway,
        Delivery
    }

    public class Order : BaseEntity
    {
        public string OrderNumber { get; set; } = string.Empty;
        public DateTime OrderTime { get; set; } = DateTime.UtcNow;
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public OrderType Type { get; set; } = OrderType.DineIn;

        public decimal SubTotal { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal ServiceFee { get; set; }
        public decimal DiscountAmount { get; set; }
        public decimal GrandTotal { get; set; }

        public Guid? TableId { get; set; }
        public virtual RestaurantTable? Table { get; set; }

        public virtual ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
        public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

        public string? CustomerName { get; set; }
        public string? CustomerPhone { get; set; }
        public string? SpecialNotes { get; set; }
    }
}
