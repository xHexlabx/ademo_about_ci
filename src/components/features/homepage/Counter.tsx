import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCounter from '@/hooks/features/homepage/useCounter';

export default function Counter() {
  const { count, increment, val, setVal } = useCounter();

  return (
    <div className='flex flex-col w-full h-full justify-center items-center gap-2 bg-slate-100'>
      <Input
        className='w-72'
        type='text'
        value={val}
        onChange={(e) => {
          const num = e.target.value.replace(/[^0-9]/g, '');
          setVal(Math.max(0, Number(num)));
        }}
      />
      <Button className='w-72' onClick={() => increment()}>
        count is {count}
      </Button>
    </div>
  );
}
