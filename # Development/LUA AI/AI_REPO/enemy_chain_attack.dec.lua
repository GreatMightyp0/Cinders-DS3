RegisterTableGoal(GOAL_EnemyChainAttack, "GOAL_EnemyChainAttack")
ENABLE_COMBO_ATK_CANCEL(GOAL_EnemyChainAttack)
REGISTER_GOAL_NO_SUB_GOAL(GOAL_EnemyChainAttack, true)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 0, "�Ώ�", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 1, "�R���{�m��", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 2, "�U��1", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 3, "�U��2", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 4, "�U��3", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 5, "�U��4", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 6, "�U��5", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyChainAttack, 7, "�U��6", 0)
Goal.Activate = function (arg0, arg1, arg2)
    local local0 = arg2:GetParam(1)
    arg2:AddSubGoal(GOAL_EnemyHandyAttack, arg2:GetLife(), arg2:GetParam(0), 1, arg2:GetParam(2), arg2:GetParam(3), arg2:GetParam(4), arg2:GetParam(5), arg2:GetParam(6), arg2:GetParam(7), local0, local0, local0, local0, local0)
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    if arg2:GetSubGoalNum() <= 0 then
        return GOAL_RESULT_Success
    else
        return GOAL_RESULT_Continue
    end
end

return 
