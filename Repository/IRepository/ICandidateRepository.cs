using System.Collections.Generic;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.IRepository
{
    public interface ICandidateRepository
    {
        List<CandidateDto> GetAllCandidates();

        CandidateDto GetCandidate(int id);

        void AddCandidate(Candidate user);

        void UpdateCandidate(Candidate user);

        void DeleteCandidate(int id);

        bool Save();
    }
}