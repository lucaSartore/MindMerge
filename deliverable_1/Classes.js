// A file including all the classes that will be used in the project, used for the class diagram in the d1.


//////////////////////// DTOs ////////////////////////

/**
 * @typedef TaskTree
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {TaskTree[]} childTasks - The child tasks of the task
 */
class TaskTree{

    /**
     * @param {number} taskId 
     */
    constructor(taskId){
        this.taskId = taskId;
        this.childTasks = [];
    }
}

const TaskStatus = {
    Idea: 1,
    Planned: 2,
    InProgress: 3,
    Ready: 4,
    Deployed: 5,
    Paused: 6,
}


/**
 * @typedef TaskNote
 * @type {Object}
 * @property {number} noteId - The id of the note
 * @property {number} taskId - The id of the task the notes are for
 * @property {string} notes - The note itself
 * @property {number} authorId - The id of the author
 * @property {Date} date - The date when the note was last edited
 */
class TaskNote{

    /**
     * @param {number} noteId
     * @param {number} taskId
     * @param {string} notes
     * @param {number} authorId
     * @param {Date} date
    */
    constructor(noteId, taskId, notes, authorId, date){
        this.noteId = noteId;
        this.taskId = taskId;
        this.notes = notes;
        this.authorId = authorId;
        this.date = date; 
    }
}

const ReportType = {
    Manual: 1,
    Automatic: 2,
}

const ReportFrequency = {
    Daily: 1,
    Weekly: 2,
    Monthly: 3,
    Yearly: 4,
}

/**
 * @typedef TaskReportSchedule
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {number} reportScheduleId - The id of the report schedule
 * @property {number} reportType - The type of the report
 * @property {number} reportFrequency - The frequency of the report
 * @property {Date} nextReportDate - The date when the report begins
 */
class TaskReportSchedule{
    /**
     * @param {number} taskId
     * @param {number} reportScheduleId
     * @param {number} reportType
     * @param {number} reportFrequency
     * @param {Date} nextReportDate 
    */
    constructor(taskId, reportScheduleId, reportType, reportFrequency, nextReportDate ){
        this.taskId = taskId;
        this.reportScheduleId = reportScheduleId;
        this.reportType = reportType;
        this.reportFrequency = reportFrequency;
        this.nextReportDate = nextReportDate ;
        // TODO: add report question
    }
}

/**
 * @typedef Task
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {number | null} taskFatherId - The id of the father task
 * @property {Date} lastUpdated - The date when the task was last updated
 * @property {string} taskName - The name of the task
 * @property {string} taskDescription - The description of the task
 * @property {number} taskStatus - The status of the task
 * @property {TaskNote[]} taskNotes - The notes of the task
 * @property {number} taskAssignee - The id of the assignee // TODO: change to array
 * @property {number} taskManager - The id of the manager 
 * @property {number} taskOrganization - The id of the organization 
 * @property {TaskReportSchedule[]} taskReports - The reports of the task
 */
class Task{
    /**
     * @param {number} taskId 
     * @param {number | null} taskFatherId 
     * @param {number} taskOrganization
     * @param {Date} lastUpdated 
     * @param {string} taskName 
     * @param {string} taskDescription 
     * @param {number} taskStatus 
     * @param {TaskNote[]} taskNotes 
     * @param {number} taskAssignee 
     * @param {number} taskManager 
     * @param {TaskReportSchedule[]} taskReports
     */
    constructor(
        taskId,
        taskFatherId,
        taskOrganization,
        lastUpdated,
        taskName,
        taskDescription,
        taskStatus,
        taskNotes,
        taskAssignee,
        taskManager,
        taskReports,
    ){
        this.taskId = taskId;
        this.taskFatherId = taskFatherId;
        this.taskOrganization = taskOrganization;
        this.lastUpdated = lastUpdated;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
        this.taskNotes = taskNotes;
        this.taskAssignee = taskAssignee;
        this.taskManager = taskManager;
        this.taskReports = taskReports;
    }
}

/**
 * @typedef Notification
 * @type {Object}
 * @property {number} notificationId - The id of the notification
 * @property {number} userId - The id of the user that the notification is for
 * @property {string} notificationText - The text of the notification
 * @property {Date} date - The date when the notification was created
 * @property {boolean} read - If the notification was read or not
 */
class Notification{
    
    /**
     * @param {number} notificationId
     * @param {number} userId
     * @param {string} notificationText
     * @param {Date} date
     * @param {boolean} read
    */
    constructor(notificationId, userId, notificationText, date, read){
        this.notificationId = notificationId;
        this.userId = userId;
        this.notificationText = notificationText;
        this.date = date;
        this.read = read;
    }
}

/**
 * @typedef Organization
 * @type {Object}
 * @property {number} organizationId - The id of the organization
 * @property {string} organizationName - The name of the organization
 * @property {number[]} userIds - The ids of the users in the organization
 * @property {boolean} licenseValid - If the license of the organization is valid
 * @property {number} ownerId - The id of the owner of the organization
 */
class Organization{
    /**
     * @param {number} organizationId 
     * @param {string} organizationName 
     * @param {number[]} userIds 
     * @param {boolean} licenseValid 
     * @param {number} ownerId
     */
    constructor(organizationId, organizationName, userIds, licenseValid, ownerId){
        this.organizationId = organizationId;
        this.organizationName = organizationName;
        this.userIds = userIds;
        this.licenseValid = licenseValid;
        this.ownerId = ownerId;
    }
}

/**
 * @typedef User
 * @type {Object}
 * @property {number} userId - The id of the user
 * @property {string} userName - The name of the user
 * @property {number[]} organizations - The ids of the organizations that the user is in
 */
class User{
    /**
     * @param {number} userId
     * @param {string} userName
     * @param {number[]} organizations
     */
    constructor(userId, userName, organizations){
        this.userId = userId;
        this.userName = userName;
        this.organizations = organizations;
    }
}


//////////////////////// DataBase ////////////////////////


class taskManager{

    constructor(){
    }

    createTask(){
    }

    changeTaskStatus(taskId, newStatus){
    }

    addTaskNote(taskId, newNotes){
    }

    editTaskNotes(noteId, oldTaskId, newNotes){
    }
}