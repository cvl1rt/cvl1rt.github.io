using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIRToISO
{
    internal static class ISOService
    {
        public static bool IsEmpty()
        {
            using (SqlConnection sqlCon = new SqlConnection(ConfigurationManager.ConnectionStrings["ISO"].ConnectionString))
            {
                sqlCon.Open();
                using (SqlCommand sqlCmd = sqlCon.CreateCommand())
                {
                    sqlCmd.CommandText = @"SELECT COUNT(1) FROM File_Upload_Log WHERE Check_Flag = 0";

                    return Convert.ToInt32(sqlCmd.ExecuteScalar()) == 0;
                }
            }
        }
    }
}
