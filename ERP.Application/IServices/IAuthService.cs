using ERP.Common.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.IServices
{
    public interface IAuthService
    {
        Task<Result> LoginAsync(LoginRequest request);
    }
}
