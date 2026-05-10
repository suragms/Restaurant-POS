using System;
using System.Collections.Generic;

namespace RestaurantPOS.API.Models
{
    public enum TableStatus
    {
        Available,
        Occupied,
        Reserved,
        Cleaning
    }

    public class RestaurantTable : BaseEntity
    {
        public string TableNumber { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public TableStatus Status { get; set; } = TableStatus.Available;
        
        // Coordinates for Visual Drag and Drop Floor Management requested in prompt
        public int PositionX { get; set; }
        public int PositionY { get; set; }
        public string? ZoneName { get; set; } // "Main Hall", "Patio" etc.

        public virtual ICollection<Order> ActiveOrders { get; set; } = new List<Order>();
    }
}
