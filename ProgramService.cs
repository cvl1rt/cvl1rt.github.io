using DIRToISO.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DIRToISO
{
    internal static class ProgramService
    {
        public static int Count { get; set; } = 1;
        public static void Run()
        {
            string programPath = ConfigurationManager.AppSettings["ProgramPath"];

            using (HttpClient client = new HttpClient())
            {
                try
                {
                    string url = programPath;
                    HttpResponseMessage response = client.GetAsync(url).Result;

                    response.EnsureSuccessStatusCode();

                    string responseBody = response.Content.ReadAsStringAsync().Result;
                    Console.WriteLine(responseBody);
                }
                catch (HttpRequestException ex)
                {
                    new Log() { 
                        Message = ex.ToString(),
                        LogTime = DateTime.Now,
                        Times = Count
                    }.Write();
                }
            }
            Count++;

            if (!ISOService.IsEmpty())
            {
                System.Console.WriteLine($"times: {Count}");
                Run();
            }
        }
    }
}
