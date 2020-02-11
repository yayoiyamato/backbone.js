(function() {

    const Task = Backbone.Model.extend({
        defaults: {
            taskName: 'タスク名を入力してね',
            completed: false
        }
    });
    const Tasks = Backbone.Collection.extend({ model: Task });

    const TaskView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#task-template').html()),
        render: function() {
            const template = this.template(this.model.toJSON());
            this.$el.html(template);
            return this;
        }
    });
    const TasksView = Backbone.View.extend({
        tagName: 'ul',
        render: function() {
            this.collection.each(task => {
                const taskView = new TaskView({ model: task });
                this.$el.append(taskView.render().el);
            }, this);
            return this;
        }
    });

    const tasks = new Tasks([
        {
            taskName: 'task1',
            completed: true
        },
        {
            taskName: 'task2'
        },
        {
            taskName: 'task3'
        }
    ]);

    const tasksView = new TasksView({ collection: tasks });
    $('#tasks').html(tasksView.render().el);


})();