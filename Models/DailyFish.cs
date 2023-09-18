using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Project1.Models
{
    public class DailyFish
    {
        [Key]
        [Column("dailyfish_id")]
        public int DailyFishId { get; set; }

        [Column("DailyFishName")]
        public string DailyFishName { get; set; }

        [Column("DailyFishImage")]
        public string DailyFishImage { get; set; }

        [NotMapped] // Important: This ensures EF doesn't try to save this property to the database
        public IFormFile DailyFishImageFile { get; set; }
    }

}
