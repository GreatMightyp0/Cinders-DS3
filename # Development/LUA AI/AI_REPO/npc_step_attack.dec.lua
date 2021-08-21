REGISTER_DBG_GOAL_PARAM(GOAL_COMMON_NPCStepAttack, 0, "�U���Ώ�", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_COMMON_NPCStepAttack, 1, "�X�e�b�vR1�U���̎˒�����", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_COMMON_NPCStepAttack, 2, "�X�e�b�vR2�U���̎˒�����", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_COMMON_NPCStepAttack, 3, "�����˒��������̏ꍇ�AR1�U�����o���m��", 0)
REGISTER_GOAL_NO_SUB_GOAL(GOAL_COMMON_NPCStepAttack, true)
function NPCStepAttack_Activate(arg0, arg1)
    local local0 = arg1:GetParam(0)
    local local1 = arg1:GetParam(1)
    local local2 = arg1:GetParam(2)
    local local3 = arg0:GetDist(TARGET_ENE_0)
    if local3 <= local1 and local3 <= local2 then
        if arg0:GetRandam_Int(1, 100) <= arg1:GetParam(3) then
            arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0)
        else
            arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0)
        end
    elseif local3 <= local1 then
        arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R1, TARGET_ENE_0, 999, 0, 0)
    elseif local3 <= local2 then
        arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, NPC_ATK_R2, TARGET_ENE_0, 999, 0, 0)
    end
    return 
end

function NPCStepAttack_Update(arg0, arg1)
    if arg1:GetSubGoalNum() <= 0 then
        return GOAL_RESULT_Success
    else
        return GOAL_RESULT_Continue
    end
end

function NPCStepAttack_Terminate(arg0, arg1)
    return 
end

REGISTER_GOAL_NO_INTERUPT(GOAL_COMMON_NPCStepAttack, true)
function NPCStepAttack_Interupt(arg0, arg1)
    return false
end

return 
