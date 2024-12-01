using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add controllers
builder.Services.AddControllers();

// Configure CORS - Allow only your frontend origin (https://www.azmandtamouh.com)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder
                .WithOrigins("https://www.azmandtamouh.com")  // Allow only this origin
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();  // Important: Allow credentials with a specific origin
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Use CORS policy
app.UseCors("AllowAll");

app.UseRouting();
app.UseHttpsRedirection();
app.UseAuthorization();

// Map controllers
app.MapControllers();

app.Run();
