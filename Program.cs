using DIRToISO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIRToISO
{
    internal class Program
    {
        static void Main(string[] args)
        {
            DateTime now = DateTime.Now;
            if (!ISOService.IsEmpty())
            {
                ProgramService.Run();

                new Log()
                {
                    Message = "finished",
                    LogTime = now,
                    Times = ProgramService.Count
                }.Write();
                Console.WriteLine($"finished \n {now}");
            }
            else
            {
                new Log()
                {
                    Message = "no file to convert",
                    LogTime = now,
                    Times = 0
                }.Write();
                Console.WriteLine($"no file to convert \n {now}");
            }
            Console.Read();
        }
    }
}
