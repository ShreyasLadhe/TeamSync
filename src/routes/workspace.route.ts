import { Router } from "express";
import {
  changeWorkspaceMemberRoleController,
  createWorkspaceController,
  deleteWorkspaceByIdController,
  getAllWorkspacesUserIsMemberController,
  getWorkspaceAnalyticsController,
  getWorkspaceByIdController,
  getWorkspaceMembersController,
  updateWorkspaceByIdController,
  removeWorkspaceMemberController,
  setWorkspaceInviteEnabledController,
} from "../controllers/workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.post("/create/new", createWorkspaceController);
workspaceRoutes.put("/update/:id", updateWorkspaceByIdController);

workspaceRoutes.put(
  "/change/member/role/:id",
  changeWorkspaceMemberRoleController
);

workspaceRoutes.delete("/delete/:id", deleteWorkspaceByIdController);

workspaceRoutes.get("/all", getAllWorkspacesUserIsMemberController);

workspaceRoutes.get("/members/:id", getWorkspaceMembersController);
workspaceRoutes.get("/analytics/:id", getWorkspaceAnalyticsController);

workspaceRoutes.get("/:id", getWorkspaceByIdController);

workspaceRoutes.delete("/member/:workspaceId/:memberId",removeWorkspaceMemberController);

workspaceRoutes.put("/invite-link/:id", setWorkspaceInviteEnabledController);

export default workspaceRoutes;