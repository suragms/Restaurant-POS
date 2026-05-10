using Microsoft.AspNetCore.Mvc;
using RestaurantPOS.API.Interfaces;
using RestaurantPOS.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RestaurantPOS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly IRepository<Category> _repository;

        public CategoriesController(IRepository<Category> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetAll()
        {
            var categories = await _repository.GetAllAsync();
            return Ok(categories);
        }

        [HttpPost]
        public async Task<ActionResult<Category>> Create(Category category)
        {
            await _repository.AddAsync(category);
            await _repository.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAll), new { id = category.Id }, category);
        }
    }
}
