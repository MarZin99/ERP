using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Common.Results
{
    public class Result<T> : Result
    {
        public T? Data { get; }

        public Result(bool isSuccess, Error error, T? data) : base(isSuccess, error)
        {
            Data = data;
        }
    }
}
