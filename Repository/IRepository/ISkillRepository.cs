using System.Collections.Generic;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.IRepository
{
    public interface ISkillRepository
    {
        List<Skill> GetAllSkills();

        Skill GetSkill(int id);

        void AddSkill(Skill skill);

        void UpdateSkill(Skill skill);

        void DeleteSkill(int id);

        bool Save();
    }
}