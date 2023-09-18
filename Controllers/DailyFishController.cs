using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class DailyFishController : Controller
    {

        private readonly FishDbContext _dbContext;
        private IWebHostEnvironment _he;

        public DailyFishController(FishDbContext productDbContext, IWebHostEnvironment he)
        {
            _dbContext = productDbContext;
            _he = he;

        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(List<DailyFish> fishs, IFormFile image)
        {
            var name = Path.Combine(_he.WebRootPath + "/Images", Path.GetFileName(image.FileName));
            await image.CopyToAsync(new FileStream(name, FileMode.Create));
            var imagePath = "Images/" + image.FileName;

            foreach (var fish in fishs)
            {
                fish.DailyFishImage = imagePath; 
                await _dbContext.DailyFishs.AddAsync(fish);
            }

            await _dbContext.SaveChangesAsync();
            return Ok();
        }


    }
}
