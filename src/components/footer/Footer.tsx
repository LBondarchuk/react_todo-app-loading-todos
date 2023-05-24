import cn from 'classnames';
import { Todo } from '../../types/Todo';
import { Select } from '../../types/Select';

type Props = {
  filterBy: string,
  setFilterBy: (string: Select) => void,
  todoList: Todo[];
};

const { All, Active, Completed } = Select;

export const Footer: React.FC<Props> = ({
  filterBy,
  setFilterBy,
  todoList,
}) => {
  function setLeftItems() {
    let count = 0;

    todoList.forEach(todo => {
      if (!todo.completed) {
        count += 1;
      }
    });

    return count;
  }

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${setLeftItems()} items left`}
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={cn('filter__link', { selected: filterBy === All })}
          onClick={() => setFilterBy(All)}
        >
          {All}
        </a>

        <a
          href="#/active"
          className={cn('filter__link',
            { selected: filterBy === Active })}
          onClick={() => setFilterBy(Active)}
        >
          {Active}
        </a>

        <a
          href="#/completed"
          className={cn('filter__link',
            { selected: filterBy === Completed })}
          onClick={() => setFilterBy(Completed)}
        >
          {Completed}
        </a>
      </nav>

      {/* don't show this button if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
};
