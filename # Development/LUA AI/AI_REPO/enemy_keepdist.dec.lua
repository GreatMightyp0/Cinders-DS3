RegisterTableGoal(GOAL_EnemyKeepDist, "GOAL_EnemyKeepDist")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_EnemyKeepDist, true)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 0, "�Ώ�", 0)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 1, "����Ώ�", 1)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 2, "�������s����", 2)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 3, "�������s����", 3)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 4, "���s��", 4)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 5, "�h�䗦", 5)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 6, "����X�e�b�v�m��", 6)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 7, "�O���X�e�b�v�m��", 7)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 8, "�X�e�b�v���s�m�F�Ԋu", 8)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 9, "�ً}�������", 8)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 10, "�ً}����m��", 8)
REGISTER_DBG_GOAL_PARAM(GOAL_EnemyKeepDist, 11, "�ً}����m�F�Ԋu", 8)
Goal.Activate = function (arg0, arg1, arg2)
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    if arg2:GetSubGoalNum() <= 0 then
        return GOAL_RESULT_Success
    end
    local local0 = arg2:GetParam(0)
    local local1 = arg2:GetParam(1)
    local local2 = arg2:GetParam(2)
    local local3 = arg2:GetParam(3)
    local local4 = arg2:GetParam(4)
    local local5 = arg2:GetParam(5)
    local local6 = arg2:GetParam(6)
    local local7 = arg2:GetParam(7)
    local local8 = arg2:GetParam(8)
    local local9 = 0
    local local10 = 0
    if local9 < 0 then
        local9 = 0
    end
    local local11 = arg2:GetParam(9)
    local local12 = arg2:GetParam(10)
    local local13 = arg2:GetParam(11)
    local local14 = arg1:GetDist(local0)
    if local11 ~= nil and local14 <= local11 then
        PassTime = arg1:GetIdTimer(1 + 1)
        if PassTime <= 0 then
            PassTime = local13
        end
        if local13 ~= nil and local13 <= PassTime then
            arg1:StartIdTimer(1 + 1)
            if local12 ~= nil and arg1:GetRandam_Float(0, 100) < local12 then
                arg2:ClearSubGoal()
                arg1:TurnTo(TRAGET_SELF)
                arg2:AddSubGoal(GOAL_EnemyStepBLR, arg2:GetLife(), local0, 5)
                arg2:AddSubGoal(GOAL_EnemyFlexibleApproach, arg2:GetLife(), local0, local1, (local9 + local10) / 2, (local9 + local10) / 2, local2, local3, local4, GuradRate, local6, local7, local8, 1)
                local local15 = arg2:AddSubGoal(GOAL_COMMON_FlexibleSideWayMove, arg2:GetLife(), arg1:GetRandam_Float(1, 100), arg1:GetRandam_Float(1, 100), TARGET_ENE_0, 3, arg1:GetRandam_Float(30, 70), arg2:GetParam(5), local9, local10)
                local15:SetFailedEndOption(AI_GOAL_FAILED_END_OPT__PARENT_NEXT_SUB_GOAL)
                return GOAL_RESULT_Continue
            end
        end
    end
    if not (local14 >= local9 or arg1:HasGoal(GOAL_COMMON_LeaveTarget)) or local10 < local14 and not arg1:HasGoal(GOAL_COMMON_ApproachTarget) then
        arg2:ClearSubGoal()
        arg1:TurnTo(TRAGET_SELF)
        arg2:AddSubGoal(GOAL_EnemyFlexibleApproach, arg2:GetLife(), local0, local1, (local9 + local10) / 2, (local9 + local10) / 2, local2, local3, local4, GuradRate, local6, local7, local8, 1)
        local local15 = arg2:AddSubGoal(GOAL_COMMON_FlexibleSideWayMove, arg2:GetLife(), arg1:GetRandam_Float(1, 100), arg1:GetRandam_Float(1, 100), TARGET_ENE_0, 3, arg1:GetRandam_Float(30, 70), arg2:GetParam(5), local9, local10)
        local15:SetFailedEndOption(AI_GOAL_FAILED_END_OPT__PARENT_NEXT_SUB_GOAL)
    end
    return GOAL_RESULT_Continue
end

return 
