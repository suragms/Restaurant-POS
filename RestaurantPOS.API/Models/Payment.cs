using System;

namespace RestaurantPOS.API.Models
{
    public enum PaymentMethod
    {
        Cash,
        Card,
        UPI,
        Online
    }

    public enum PaymentStatus
    {
        Pending,
        Completed,
        Failed,
        Refunded
    }

    public class Payment : BaseEntity
    {
        public Guid OrderId { get; set; }
        public virtual Order? Order { get; set; }

        public decimal Amount { get; set; }
        public PaymentMethod Method { get; set; }
        public PaymentStatus Status { get; set; } = PaymentStatus.Pending;
        
        public string? TransactionId { get; set; }
        public string? GatewayResponse { get; set; }
        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;
    }
}
