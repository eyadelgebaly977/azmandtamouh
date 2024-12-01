using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;

namespace ContactAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<ContactController> _logger;

        public ContactController(IConfiguration configuration, ILogger<ContactController> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> SendEmail([FromBody] ContactRequest request)
        {
            try
            {
                // Adding CORS headers
                Response.Headers.Add("Access-Control-Allow-Origin", "https://www.azmandtamouh.com");
                Response.Headers.Add("Access-Control-Allow-Methods", "POST");
                Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Authorization");

                using var client = new SmtpClient("smtp.gmail.com", 587)
                {
                    EnableSsl = true,
                    Credentials = new NetworkCredential("info@azmandtamouh.com", "azmandtamouh@")
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress("info@azmandtamouh.com"),
                    Subject = $"New Contact Form Submission from {request.Name}",
                    Body = $"""
                        New contact form submission:
                        
                        Name: {request.Name}
                        Email: {request.Email}
                        Message: {request.Message}
                        
                        This email was sent from the Azm and Tmouh Trading Est. website contact form.
                        """,
                    IsBodyHtml = false
                };
                mailMessage.To.Add("info@azmandtamouh.com");

                await client.SendMailAsync(mailMessage);
                return Ok(new { message = "Email sent successfully" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error sending email");
                return StatusCode(500, new { message = "Error sending email", details = ex.Message });
            }
        }
    }

    public class ContactRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }
}
