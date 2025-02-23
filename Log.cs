using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIRToISO.Models
{
    internal class Log
    {
        public string Message { get; set; }
        public int Times { get; set; }  
        public DateTime LogTime { get; set; }
        public Log() { }
        public Log(string message) { }
        public void Write()
        {
            string logFolderPath = ConfigurationManager.AppSettings["LogFolderPath"];
            
            if (!Directory.Exists(logFolderPath))
            {
                Directory.CreateDirectory(logFolderPath);
            }

            string logFilePath = Path.Combine(logFolderPath, DateTime.Now.ToString("yyyy-MM-dd"));

            JArray logContent = new JArray();

            if (File.Exists(logFilePath))
            {
                logContent = JArray.Parse(File.ReadAllText(logFilePath));
            }

            logContent.Add(JObject.Parse(JsonConvert.SerializeObject(this)));

            File.WriteAllText(logFilePath, JsonConvert.SerializeObject(logContent, Formatting.Indented));
        }
    }
}
