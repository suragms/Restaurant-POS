using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using RestaurantPOS.API.Models;
using System;
using System.Threading.Tasks;

namespace RestaurantPOS.API.Data
{
    public static class SeedData
    {
        public static async Task Initialize(IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            // Ensure Standard Roles
            string[] roleNames = { "SuperAdmin", "Owner", "Manager", "Cashier", "Waiter", "Chef" };
            foreach (var roleName in roleNames)
            {
                if (!await roleManager.RoleExistsAsync(roleName))
                {
                    await roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

            // Seed default Super Admin
            string adminEmail = "admin@hexapos.com";
            string adminPass = "Admin123!hXa";

            var adminUser = await userManager.FindByEmailAsync(adminEmail);
            if (adminUser == null)
            {
                adminUser = new ApplicationUser
                {
                    UserName = adminEmail,
                    Email = adminEmail,
                    FullName = "Platform Super Admin",
                    EmailConfirmed = true
                };

                var result = await userManager.CreateAsync(adminUser, adminPass);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(adminUser, "SuperAdmin");
                }
            }
        }
    }
}
