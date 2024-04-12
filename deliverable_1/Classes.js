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
 * @property {Date} date - The date when the note was last edited
 */
class TaskNote{

    /**
     * @param {number} noteId
     * @param {number} taskId
     * @param {string} notes
     * @param {Date} date
    */
    constructor(noteId, taskId, notes, date){
        this.noteId = noteId;
        this.taskId = taskId;
        this.notes = notes;
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
 * @property {string} reportPrompt - The prompt/question for the report
 */
class TaskReportSchedule{
    /**
     * @param {number} taskId
     * @param {number} reportScheduleId
     * @param {number} reportType
     * @param {number} reportFrequency
     * @param {Date} nextReportDate 
     * @param {string} reportPrompt
    */
    constructor(taskId, reportScheduleId, reportType, reportFrequency, nextReportDate, reportPrompt){
        this.taskId = taskId;
        this.reportScheduleId = reportScheduleId;
        this.reportType = reportType;
        this.reportFrequency = reportFrequency;
        this.nextReportDate = nextReportDate ;
        this.reportPrompt = reportPrompt;
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
 * @property {number[]} taskAssignees - A list containing the ids of the assignees for the current task 
 * @property {number} taskManager - The id of the manager 
 * @property {number} taskOrganization - The id of the organization 
 * @property {TaskReportSchedule[]} taskReports - The reports of the task
 * @property {bool} notificationEnable - whether to send notification to the manager when the status of the task changes or not
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
     * @param {number | number[]} taskAssignee 
     * @param {number} taskManager 
     * @param {TaskReportSchedule[]} taskReports
     * @param {bool} notificationEnable
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
        notificationEnable
    ){
        this.taskId = taskId;
        this.taskFatherId = taskFatherId;
        this.taskOrganization = taskOrganization;
        this.lastUpdated = lastUpdated;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
        this.taskNotes = taskNotes;
        if(taskAssignee.constructor === Array){
            this.taskAssignees = taskAssignee;
        }else{
            this.taskAssignees = [taskAssignee];
        }
        this.taskManager = taskManager;
        this.taskReports = taskReports;
        this.notificationEnable = notificationEnable;
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

/**
 * Represents a generic response with a status code and payload.
 * @template T
 * @property {number} statusCode - The status code of the response
 * @property {string} message - The message of the response
 * @property {T} payload - The payload of the response
 */
class CustomResponse {
    /**
     * @param {number} statusCode
     * @param {string} message
     * @param {T} payload
    */
    constructor(statusCode, message, payload){
        this.statusCode = statusCode;
        this.message = message;
        this.payload = payload;
    }
}


//////////////////////// DataBase ////////////////////////

/**
 * @typedef dataBaseManager
 * @type {Object}
 * @property {MongoClient} client - The official MongoDB driver for Node.js 
 */
class dataBaseManager{
    constructor(uri){
        self.client = new MongoClient(uri);
    }
}




class taskManager extends dataBaseManager{

    //////////////////////////// Creation ////////////////////////////

    /**
     * Create a new task in the database, the id of the task will be automatically generated
     * return the id of the task created
     * @param {Task} task 
     * @returns {CustomResponse<number>}
     */
    createTask(task){
        return x
    }
    
    /**
     * Create new note to the task.
     * The note's date will be automatically set to the current time in the server
     * The note's id will be automatically generated
     * Return the id of the note created
     * @param {number} taskId 
     * @param {string} notes 
     * @returns {CustomResponse<number>}
     */
    createTaskNotes(taskId, notes){
    }

    /**
     * Create a new report schedule for the desired task
     * return the id of the report schedule
     * @param {*} taskId 
     * @param {*} taskReportSchedule 
     * @returns {CustomResponse<number>}
     */
    createTaskReportSchedule(taskId, taskReportSchedule){

    }
    

    //////////////////////////// Updating ////////////////////////////

    /**
     * Update the task with the given id with the new task that is passed
     * @param {number} taskId 
     * @param {Task} newTask 
     * @returns {Response}
     */
    updateTask(taskId, newTask){
    }

    /**
     * Update the last updated date of the task with the given id to the current time in the server 
     * @param {number} taskId 
     * @returns {CustomResponse<void>}
     */
    updateTaskLastUpdated(taskId){
    }

    /**
     * Update the name of the task with the given id to the new name that is passed
     * @param {number} taskId
     * @param {string} newName
     * @returns {CustomResponse<void>}
     */
    updateTaskName(taskId, newName){
    }

    /**
     * Update the description of the task with the given id to the new description that is passed
     * @param {number} taskId
     * @param {string} newDescription
     * @returns {CustomResponse<void>}
     */
    updateTaskDescription(taskId, newDescription){

    }

    /**
     * Update the status of the task with the given id to the new status that is passed 
     * @param {number} taskId 
     * @param {number} newStatus 
     */
    updateTaskStatus(taskId, newStatus){

    }

    /**
     * Update the notes of a task.
     * The note's date will be automatically set to the current time in the server 
     * @param {number} taskId 
     * @param {number} noteId 
     * @param {string} newNotes 
     * @returns {CustomResponse<void>}
     */
    updateTaskNotes(taskId, noteId, newNotes){
    }

    /**
     * Update the assignees of the task with the given id to the new assignees that are passed 
     * @param {number} taskId 
     * @param {number[]} assignees 
     * @returns {CustomResponse<void>}
     */
    updateTaskAssignees(taskId, assignees){
    }

    /**
     * Add a new assignee to the task, if it doesn't exist already
     * @param {number} taskId 
     * @param {number} assignee 
     * @returns {CustomResponse<void>}
     */
    addNewAssignee(taskId, assignee){
    }

    /**
     * Update the manager of the task with the given id to the new manager that is passed
     * @param {number} taskId
     * @param {number} newManager
     * @returns {CustomResponse<void>}
     */
    updateTaskManager(taskId, newManager){
    }

    /**
     * Enable the notifications for the task with the given id 
     * @param {number} taskId 
     * @returns {CustomResponse<void>}
     */
    enableNotification(taskId){
    }
    
    /**
     * Disable the notifications for the task with the given id 
     * @param {number} taskId 
     * @returns {CustomResponse<void>}
     */
    disableNotification(taskId){

    }

    //////////////////////////// Deleting ////////////////////////////

    /**
     * Delete the note with the given id from the task with the given id
     */

    /**
     * Delete the task with the given id 
     * @param {number} taskId 
     * @returns {Response}
     */
    deleteTask(taskId){
    }



    //////////////////////////// Reading ///////////////////////////
}


