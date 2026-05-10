using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RestaurantPOS.API.Models;

namespace RestaurantPOS.API.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<RestaurantTable> Tables { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Payment> Payments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Base query filter for soft delete
            modelBuilder.Entity<Category>().HasQueryFilter(c => !c.IsDeleted);
            modelBuilder.Entity<MenuItem>().HasQueryFilter(m => !m.IsDeleted);

            // Set up precision for decimal values
            modelBuilder.Entity<MenuItem>()
                .Property(m => m.Price)
                .HasPrecision(18, 2);

            modelBuilder.Entity<MenuItem>()
                .Property(m => m.TaxPercentage)
                .HasPrecision(5, 2);

            // Configure Order totals
            modelBuilder.Entity<Order>()
                .Property(o => o.GrandTotal).HasPrecision(18, 2);
            modelBuilder.Entity<Order>()
                .Property(o => o.SubTotal).HasPrecision(18, 2);
            modelBuilder.Entity<Order>()
                .Property(o => o.TaxAmount).HasPrecision(18, 2);
            modelBuilder.Entity<Order>()
                .Property(o => o.ServiceFee).HasPrecision(18, 2);
            modelBuilder.Entity<Order>()
                .Property(o => o.DiscountAmount).HasPrecision(18, 2);

            // OrderItem specifics
            modelBuilder.Entity<OrderItem>()
                .Property(oi => oi.UnitPrice).HasPrecision(18, 2);
            modelBuilder.Entity<OrderItem>()
                .Property(oi => oi.TotalPrice).HasPrecision(18, 2);

            // Payment
            modelBuilder.Entity<Payment>()
                .Property(p => p.Amount).HasPrecision(18, 2);

            // Soft Delete Query Filters
            modelBuilder.Entity<Order>().HasQueryFilter(o => !o.IsDeleted);
            modelBuilder.Entity<RestaurantTable>().HasQueryFilter(t => !t.IsDeleted);
        }
    }
}
